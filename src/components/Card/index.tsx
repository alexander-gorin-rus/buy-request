import * as React from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { dateFormatWithTime } from 'src/utils/helpers';
import {
  CardBlockBox,
  CardCurrencyWrapper,
  CustomCard,
  DataText,
  PriceText,
  MediaBox,
  StatusWrapper,
  TitleAndBudget,
  MediaContainer,
  CardMedia,
} from 'src/commonStyles/Card';
import IconRuble from 'src/icons/IconRuble';
import { ICardProps, IBaseCardData } from './types';
import Tooltip from '../Tooltip';

const pictureMock = 'https://mui.com/static/images/cards/contemplative-reptile.jpg';

const Card = <T extends IBaseCardData>({
  data, url, cover, statusLabels,
}: ICardProps<T>) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleClick = () => {
    if (url) navigate(url);
  };

  return (
    <CustomCard onClick={handleClick}>
      <MediaContainer>
        <MediaBox>
          <CardMedia src={cover || pictureMock} alt={data.title} />
        </MediaBox>

        {(data.status && statusLabels)
        && (
          <StatusWrapper>
            {
              // @ts-ignore
              t(statusLabels[data.status])
            }
          </StatusWrapper>
        )}
        {data.mark && (
          <StatusWrapper>
            {data.mark}
          </StatusWrapper>
        )}
      </MediaContainer>
      <TitleAndBudget>
        <Tooltip text={data.title} showOnOverflow>
          {data.title}
        </Tooltip>
      </TitleAndBudget>
      <CardBlockBox>
        {
              data.price && (
                <PriceText>
                  {data.price}
                  <CardCurrencyWrapper>
                    <IconRuble />
                  </CardCurrencyWrapper>
                </PriceText>
              )
            }
        <DataText>
          {dateFormatWithTime(data.createdAt)}
        </DataText>
      </CardBlockBox>
    </CustomCard>
  );
};

export default Card;
