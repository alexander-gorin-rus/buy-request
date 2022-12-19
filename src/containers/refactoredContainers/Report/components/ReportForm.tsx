import React, { VFC, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { joiResolver } from '@hookform/resolvers/joi';
import { CustomStyledButton } from 'src/components/CustomStyledButton';
import CustomStyledTextarea from 'src/components/CustomStyledTextarea';
import CustomStyledInput from 'src/components/CustomStyledInput';
import { getComponentLoadingSelector, getCurrentUserSelector } from 'src/core/selectors';
import { reportSchema } from 'src/utils/schema';
import i18next from 'src/i18next';
import dispatchPromise from 'src/utils/helpers';
import { setReportRequest } from '../actions/actions';

import { IReport, IReportFormProps } from '../types';
import {
  StyledForm,
  StyledFormControl,
  ButtonsContainer,
} from '../styles';

const ReportForm: VFC<IReportFormProps> = memo((props) => {
  const { entityId, toggle } = props;

  const dispatch = useDispatch();
  const { t } = useTranslation('report');
  const isLoading = useSelector(getComponentLoadingSelector);

  const user = useSelector(getCurrentUserSelector);

  const {
    handleSubmit, control, formState: { isDirty, isValid },
  } = useForm<IReport>({
    defaultValues: {
      subject: '',
      description: '',
    },
    mode: 'onChange',
    resolver: joiResolver(reportSchema),
  });

  const onSendReport = (data: IReport): void => {
    if (user && user.id) {
      dispatchPromise(dispatch, setReportRequest({
        userId: user.id,
        entityId,
        subject: data.subject,
        description: data.description,
      })).then(() => {
        toggle();
      });
    }
  };

  const onCancelReport = () => {
    toggle();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSendReport)}>
      <StyledFormControl>
        <Controller
          name="subject"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <StyledFormControl>
              <CustomStyledInput
                {...field}
                label={t('inputSubject.label')}
                placeholder={t('inputSubject.placeholder')}
                error={
                  error?.message
                    && i18next.t(error.message)
                  }
              />
            </StyledFormControl>
          )}
        />
        <Controller
          name="description"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <StyledFormControl>
              <CustomStyledTextarea
                {...field}
                label={t('inputMessage.label')}
                placeholder={t('inputMessage.placeholder')}
                error={
                  error?.message
                    && i18next.t(error.message)
                  }
              />
            </StyledFormControl>
          )}
        />

        <ButtonsContainer>
          <CustomStyledButton onClick={onCancelReport}>
            {t('buttons.cancel')}
          </CustomStyledButton>
          <CustomStyledButton
            primary
            disabled={!isDirty || !isValid || isLoading}
            isLoading={isLoading}
          >
            {t('buttons.send')}
          </CustomStyledButton>
        </ButtonsContainer>
      </StyledFormControl>
    </StyledForm>
  );
});

export default ReportForm;
