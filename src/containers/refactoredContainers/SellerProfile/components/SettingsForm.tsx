import React, { memo, VFC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  Accordion, AccordionSummary, AccordionDetails, Checkbox,
  Typography, FormControlLabel, Chip, MenuItem,
  SelectChangeEvent, InputLabel, Select,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { joiResolver } from '@hookform/resolvers/joi';
import { useTranslation } from 'react-i18next';
import Modal from '../../../../components/Modal';
import { getCurrentUserSelector } from '../../../../core/selectors';
import { sellerSettingsSchema } from '../../../../utils/schema';
import {
  ButtonStyled, RowButton, StyledFormControl, StyledForm,
  StyledSelectFormControl, StyledAccordionContent, StyledChipsContainer,
} from '../styles';
import { ISettingSeller, ISettingsFormProps } from '../types';
import { saveSellerSettingsRequest } from '../actions/actions';
import { ITag } from '../../../../core/types';
import { locale } from '../../../../i18next';

const SettingsForm: VFC<ISettingsFormProps> = memo(({ tags, settingData }) => {
  const dispatch = useDispatch();
  const [isEdit, setEditProfile] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const currentUser = useSelector(getCurrentUserSelector);
  const { t } = useTranslation('sellerProfile');

  const {
    handleSubmit, getValues, setValue,
  } = useForm<ISettingSeller>({
    defaultValues: settingData,
    mode: 'onChange',
    resolver: joiResolver(sellerSettingsSchema),
  });

  const toggleEditForm = (): void => {
    setEditProfile(!isEdit);
  };

  const toggleModal = () => {
    setOpenModal((prevState) => !prevState);
  };

  const onSubmit = (updatedData: ISettingSeller): void => {
    if (currentUser && updatedData.tags.length) {
      toggleEditForm();
      dispatch(saveSellerSettingsRequest({
        updatedData,
        userId: currentUser.id,
      }));
    } else {
      toggleModal();
    }
  };

  const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
    const { target: { value } } = event;
    setValue('tags', typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledFormControl>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography>
                {t('headers.settings')}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <StyledAccordionContent>
                <FormControlLabel
                  control={(
                    <Checkbox
                      disabled={!isEdit}
                      defaultChecked={getValues('emails')}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue('emails', e.target.checked)}
                    />
                  )}
                  label={t('form.label.enableEmailNotice')}
                />
                <StyledSelectFormControl>
                  <InputLabel id="tags-label">{t('form.label.tags')}</InputLabel>
                  <Select
                    id="tags"
                    multiple
                    disabled={!isEdit}
                    labelId="tags-label"
                    label={t('form.label.tags')}
                    defaultValue={getValues('tags')}
                    onChange={handleSelectChange}
                    renderValue={(selected) => (
                      <StyledChipsContainer>
                        {selected.map((item) => {
                          const val = item.toString();
                          // TODO: tags
                          const tagItem = tags?.find((tag: ITag) => (tag.id === val));
                          return (
                            <Chip
                              key={tagItem?.id}
                              label={
                              (locale === 'en')
                                ? tagItem?.titleEn : tagItem?.titleRu
                            }
                            />
                          );
                        })}
                      </StyledChipsContainer>
                    )}
                  >
                    {tags?.map((item) => (
                      <MenuItem
                        key={item.id}
                        value={item.name}
                      >
                        { (locale === 'en')
                          ? item.titleEn : item.titleRu }
                      </MenuItem>
                    ))}
                  </Select>
                </StyledSelectFormControl>
                <RowButton>
                  {
                    isEdit && (
                      <ButtonStyled variant="outlined" onClick={toggleEditForm}>
                        {t('form.buttons.cancel')}
                      </ButtonStyled>
                    )
                  }
                  <ButtonStyled variant="outlined" onClick={isEdit ? handleSubmit(onSubmit) : toggleEditForm}>
                    {isEdit ? t('form.buttons.save') : t('form.buttons.editSettings')}
                  </ButtonStyled>
                </RowButton>
              </StyledAccordionContent>
            </AccordionDetails>
          </Accordion>
        </StyledFormControl>
      </StyledForm>
      <Modal onClose={toggleModal} open={openModal} maxWidth="xs">
        <Typography variant="h6" gutterBottom align="center" mb={4} mt={3}>
          {t('tagsSettingsNotice')}
        </Typography>
      </Modal>
    </>
  );
});
export default SettingsForm;
