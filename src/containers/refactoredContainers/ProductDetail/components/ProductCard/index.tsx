import React, {
  memo, useMemo, useState, VFC, useRef,
} from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';

import Badge from 'src/components/Badge';
import { BadgeWrapper } from 'src/commonStyles';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { CustomStyledButton } from 'src/components/CustomStyledButton';
import Dialog from 'src/components/Dialog';
import Tooltip from 'src/components/Tooltip';
import Report from 'src/containers/refactoredContainers/Report';
import { ReactComponent as Lightning } from 'src/lightning.svg';
import { getComponentLoadingSelector, getCurrentUserSelector } from 'src/core/selectors';
import { LANGUAGES, TypeUser } from 'src/utils/constants';
import {
  StyledConsumerActionsContainer, StyledDelete, StyledEdit,
} from 'src/containers/refactoredContainers/Request/styles';
import CustomSlider from 'src/components/CustomSlider';
import { APP_ROUTES } from 'src/core/appRoutes';
import Preloader from 'src/components/Preloader';

import dispatchPromise from 'src/utils/helpers';
import {
  Title, ModelWrapper, GalleryList, MediaWrapper, ProductCardWrapper,
  ProductInfoHeader, ProductInfoWrapper, Description, Model,
  WarrantyWrapper, WarrantyTitle, Warranty, ComplainButtonWrapper,
  StyledModalTitle, StyledModalContent, StyledModalControlsWrapper,
  SCustomSliderPreviewImg,
  SCustomSliderPreview,
} from 'src/containers/refactoredContainers/ProductDetail/styles';
import config from 'src/config';
import OpenMediaComponent from 'src/components/OpenMediaComponent';
import { removeProduct } from '../../actions/actions';
import { IProductFormProps } from '../../types';
import { getIsRemovalLoaderSelector } from '../../selectors';

const ProductCard: VFC<IProductFormProps> = memo(({ productData, redirectToEdit }) => {
  const {
    userId, media, name, model, description, productionGuarantee, tagsData, id,
  } = productData;
  const { t, i18n: { language } } = useTranslation(['singleRequest', 'productForm', 'common']);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams<{ productId: string }>();
  const currentUser = useSelector(getCurrentUserSelector);
  const isLoading = useSelector(getComponentLoadingSelector);
  const isRemovalLoader = useSelector(getIsRemovalLoaderSelector);
  const [isReportOpened, setIsReportOpened] = useState(false);
  const [isDeleteModalOpened, setIsDeleteModalOpened] = useState(false);

  const redirectToCatalog = () => navigate(APP_ROUTES.CATALOG);

  const toggleComplain = () => setIsReportOpened(!isReportOpened);

  const toggleDeleteModal = () => {
    setIsDeleteModalOpened((prev) => !prev);
  };

  const handleRemoveProduct = () => {
    if (productData) {
      dispatchPromise(dispatch, removeProduct({ id: params.productId })).then(() => {
        redirectToCatalog();
      });
    }
  };
  const [selected, setSelected] = useState<number>(0);
  const [isMediaModalOpened, setIsMediaModalOpened] = useState(false);
  const toggleMediaOpen = () => {
    setIsMediaModalOpened(!isMediaModalOpened);
  };
  const modalRef = useRef(null);
  const mediaUrls = useMemo(() => (
    media.map((image) => (
      `${config.mediaServiceUrl}/product/${image?.fileNameMinio}`
    ))
  ), [media]);

  return (
    <ProductCardWrapper>
      <MediaWrapper>
        <GalleryList>
          {
            media && (
              <CustomSlider
                items={media.map((image) => ({
                  id: image,
                  src: `${config.mediaServiceUrl}/product/${image.fileNameMinio}`,
                }))}
                setSelected={setSelected}
                selected={selected}
              >
                <SCustomSliderPreview
                  type="button"
                  onClick={toggleMediaOpen}
                >
                  <SCustomSliderPreviewImg
                    src={`${config.mediaServiceUrl}/product/${media[selected].fileNameMinio}`}
                    alt="img"
                  />
                </SCustomSliderPreview>
              </CustomSlider>
            )
          }
        </GalleryList>
        {currentUser?.id !== userId && (
          <ComplainButtonWrapper>
            <CustomStyledButton
              onClick={toggleComplain}
              noBorder
            >
              <Lightning />
              {t('common:form.button.complain')}
            </CustomStyledButton>
          </ComplainButtonWrapper>
        )}
      </MediaWrapper>
      <ProductInfoWrapper>
        <ProductInfoHeader>
          <Title>{name}</Title>
          {currentUser && currentUser.type === TypeUser.seller && currentUser.id === userId && (
            <StyledConsumerActionsContainer>
              <Tooltip text={t('singleRequest:buttons.edit')}>
                <StyledEdit onClick={redirectToEdit} />
              </Tooltip>
              <Tooltip text={t('singleRequest:buttons.remove')}>
                <StyledDelete onClick={toggleDeleteModal} />
              </Tooltip>
            </StyledConsumerActionsContainer>
          )}
        </ProductInfoHeader>
        <ModelWrapper>
          <Model>{model}</Model>
        </ModelWrapper>
        <Description>{description}</Description>
        <WarrantyWrapper>
          <WarrantyTitle>{t('productForm:warranty')}</WarrantyTitle>
          <Warranty>{productionGuarantee}</Warranty>
        </WarrantyWrapper>
        {isLoading ? <Preloader isComponent /> : (
          <BadgeWrapper>
            {tagsData && tagsData.map((tag) => (
              <Badge key={tag?.id}>
                {language === LANGUAGES.en ? tag?.titleEn : tag?.titleRu}
              </Badge>
            ))}
          </BadgeWrapper>
        )}
      </ProductInfoWrapper>
      <Dialog open={isReportOpened}>
        <Report entityId={id} toggle={toggleComplain} />
      </Dialog>
      <Dialog open={isDeleteModalOpened}>
        <StyledModalContent>
          <StyledModalTitle>
            {t('productForm:deleteProductModalNotice')}
          </StyledModalTitle>
          <StyledModalControlsWrapper>
            <CustomStyledButton
              onClick={toggleDeleteModal}
              disabled={isRemovalLoader}
            >
              {t('common:form.button.revoke')}
            </CustomStyledButton>
            <CustomStyledButton
              primary
              onClick={handleRemoveProduct}
              isLoading={isRemovalLoader}
              disabled={isRemovalLoader}
            >
              {t('common:form.button.continue')}
            </CustomStyledButton>
          </StyledModalControlsWrapper>
        </StyledModalContent>
      </Dialog>
      <div ref={modalRef}>
        { media
         && (
         <OpenMediaComponent
           media={mediaUrls}
           open={isMediaModalOpened}
           closeModal={toggleMediaOpen}
           openMediaModal={isMediaModalOpened}
           clickedMedia={selected}
           setOpenMediaModal={setIsMediaModalOpened}
         />
         )}
      </div>

    </ProductCardWrapper>
  );
});

export default ProductCard;
