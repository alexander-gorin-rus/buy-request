import Joi from 'joi';
import { TranslationKeys } from 'react-i18next';
import { isValidPhoneNumber } from 'react-phone-number-input';
import {
  CHAT_MESSAGE_LENGTH_MAX,
  MAX_INT,
  MEDIA_RESTRICTIONS,
  TypeUser,
} from './constants';

export const joiRequired = (
  required: TranslationKeys = 'common:form.validations.required',
) => Joi.string().required().messages({
  'string.empty': required,
  'any.required': required,
});

export const joiProductSelectRequired = (
  required: TranslationKeys = 'common:form.validations.required',
) => Joi.array()
  .items(Joi.string())
  .min(1)
  .messages({
    'array.includesRequiredUnknowns': required,
    'string.empty': required,
    'object.base': required,
    'array.min': required,
  });

export const joiSellerProductSelectRequired = (
  required: TranslationKeys = 'common:form.validations.required',
  maxProductCount: TranslationKeys = 'common:form.validations.maxProductCountInOfferCreation',
) => Joi.array()
  .max(1)
  .messages({
    'string.empty': required,
    'object.length': required,
    'object.base': required,
    'any.only': required,
    'array.max': maxProductCount,
  });

export const joiOfferPrice = (
  required: TranslationKeys = 'common:form.validations.required',
  numberPositive = 'common:form.validations.numberPositive',
  numberInteger = 'common:form.validations.numberInteger',
  numberMax = 'common:form.validations.numberMax',
) => Joi.number().integer().positive().required()
  .max(MAX_INT)
  .messages({
    'any.required': required,
    'number.base': required,
    'number.positive': numberPositive,
    'number.integer': numberInteger,
    'number.max': numberMax,
    'number.unsafe': numberMax,
  });

export const joiRequiredAccept = (
  requiredAccept: TranslationKeys = 'common:form.validations.requiredAccept',
) => Joi.boolean().valid(true).required().messages({
  'any.only': requiredAccept,
});

export const joiMedia = (
  minOneMedia: TranslationKeys = 'common:form.validations.minOneMedia',
  maxTenMedia: TranslationKeys = 'common:form.validations.maxTenMedia',
  imageResolution: TranslationKeys = 'common:form.validations.imageResolution',
  imageSize: TranslationKeys = 'common:form.validations.imageSize',
) => Joi.array().items(Joi.object().keys({
  fileNameMinio: Joi.string().allow(''),
  fileOriginalName: Joi.string().required(),
  mimetype: Joi.string().required(),
  preview: Joi.string(),
  bucket: Joi.string(),
  file: Joi.object().unknown(true),
  imageHeight: Joi.number().min(MEDIA_RESTRICTIONS.IMAGE_MIN_HEIGHT)
    .max(MEDIA_RESTRICTIONS.IMAGE_MAX_HEIGHT)
    .messages({
      'number.max': imageResolution,
      'number.min': imageResolution,
    }),
  imageWidth: Joi.number().min(MEDIA_RESTRICTIONS.IMAGE_MIN_WIDTH)
    .max(MEDIA_RESTRICTIONS.IMAGE_MAX_WIDTH)
    .messages({
      'number.max': imageResolution,
      'number.min': imageResolution,
    }),
  imagePixelsCount: Joi.number().max(MEDIA_RESTRICTIONS.IMAGE_MAX_PIXELS_COUNT).messages({
    'number.max': imageResolution,
  }),
  fileSize: Joi.number().max(MEDIA_RESTRICTIONS.FILE_MAX_SIZE).messages({
    'number.max': imageSize,
  }),
  id: Joi.string(),
})).min(1).max(10)
  .messages({
    'array.min': minOneMedia,
    'array.max': maxTenMedia,
  });

export const joiTagsRequired = (
  minOneTag: TranslationKeys = 'common:form.validations.minOneTag',
  maxTagCount: TranslationKeys = 'common:form.validations.maxTagCount',
) => Joi.array().min(1).max(3).messages({
  'array.min': minOneTag,
  'array.max': maxTagCount,
});

export const reportSchema = Joi.object({
  subject: joiRequired(),
  description: joiRequired(),
});

export const joiUsername = (
  required: TranslationKeys = 'common:form.validations.usernameRequired',
  tooLong: TranslationKeys = 'common:form.validations.tooLong',
  tooShort: TranslationKeys = 'common:form.validations.tooShort',
) => Joi.string()
  .required()
  .min(2)
  .max(50)
  .messages({
    'string.empty': required,
    'string.max': tooLong,
    'string.min': tooShort,
  });

export const joiUserType = () => Joi.string()
  .required();

export const joiName = (
  required: TranslationKeys = 'common:form.validations.nameRequired',
  noNumbers: TranslationKeys = 'common:form.validations.nameNoNumbers',
  tooLong: TranslationKeys = 'common:form.validations.tooLong',
  tooShort: TranslationKeys = 'common:form.validations.tooShort',
) => Joi.string()
  .required()
  .min(2)
  .max(50)
  .regex(/^[A-zА-я]{2,50}$/)
  .messages({
    'string.pattern.base': noNumbers,
    'string.empty': required,
    'string.max': tooLong,
    'string.min': tooShort,
  });

export const joiSurname = (
  required: TranslationKeys = 'common:form.validations.surnameRequired',
  noNumbers: TranslationKeys = 'common:form.validations.surnameNoNumbers',
  tooLong: TranslationKeys = 'common:form.validations.tooLong',
  tooShort: TranslationKeys = 'common:form.validations.tooShort',
) => Joi.string()
  .required()
  .min(2)
  .max(50)
  .regex(/^[A-zА-я]{2,50}$/)
  .messages({
    'string.pattern.base': noNumbers,
    'string.empty': required,
    'string.max': tooLong,
    'string.min': tooShort,
  });

export const joiPhone = (
  required: TranslationKeys = 'common:form.validations.phoneRequired',
) => Joi.string().custom((value, helper) => {
  if (!isValidPhoneNumber(value)) {
    return helper.error('any.invalid');
  }
  return value;
})
  .required().messages({
    'any.required': required,
    'string.empty': required,
    'any.invalid': 'common:form.validations.phoneValidation',
  });

export const joiEmail = (
  required: TranslationKeys = 'common:form.validations.emailRequired',
  email: TranslationKeys = 'common:form.validations.email',
) => Joi.string()
  .email({ tlds: { allow: false } })
  .regex(/^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?){1,3}$/)
  .messages({
    'string.empty': required,
    'string.email': email,
    'string.pattern.base': email,
  });

export const joiPassword = (
  required: TranslationKeys = 'common:form.validations.passwordRequired',
  min: TranslationKeys = 'common:form.validations.passwordMinLength',
  regex: TranslationKeys = 'common:form.validations.regex',
  tooLong: TranslationKeys = 'common:form.validations.tooLong',
) => Joi.string()
  .min(8)
  .max(50)
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9.,!#$%&@*+\\/=?()<>[\]{|}^:;`'"_~-]{8,50}$/)
  .required()
  .messages({
    'string.empty': required,
    'string.min': min,
    'string.pattern.base': regex,
    'string.max': tooLong,
  });

export const joiLoginPassword = (
  required: TranslationKeys = 'common:form.validations.passwordRequired',
  min: TranslationKeys = 'common:form.validations.passwordMinLength',
  tooLong: TranslationKeys = 'common:form.validations.tooLong',
) => Joi.string()
  .min(8)
  .max(50)
  .required()
  .messages({
    'string.empty': required,
    'string.min': min,
    'string.max': tooLong,
  });

export const joiCode = (
  required: TranslationKeys = 'common:form.validations.required',
) => Joi
  .string()
  .required()
  .min(6)
  .messages({
    'string.empty': required,
    'string.min': required,
  });

export const joiCompany = (
  required: TranslationKeys = 'common:form.validations.companyRequired',
  tooLong: TranslationKeys = 'common:form.validations.tooLong',
) => Joi.string()
  .required()
  .max(50)
  .messages({
    'string.empty': required,
    'string.max': tooLong,
  });

export const joiConfirmPassword = (
  name: string = 'password',
  required: TranslationKeys = 'common:form.validations.passwordConfirmRequired',
  match: TranslationKeys = 'common:form.validations.passwordMatch',
) => Joi.any()
  .equal(Joi.ref(name))
  .required()
  .options({
    messages: {
      'string.empty': required,
      'any.only': match,
    },
  });

export const joiShortFields = (
  required: TranslationKeys = 'common:form.validations.required',
  min: TranslationKeys = 'common:form.validations.tooLongDescription',
  tooLong: TranslationKeys = 'common:form.validations.tooLongDescription',
) => Joi.string()
  .min(1)
  .max(255)
  .required()
  .messages({
    'string.empty': required,
    'string.min': min,
    'string.max': tooLong,
  });

export const joiAdditionalCondition = (
  tooLong: TranslationKeys = 'common:form.validations.tooLongDescription',
) => Joi.string()
  .max(255)
  .allow('')
  .messages({
    'string.max': tooLong,
  });

export const joiDescription = (
  required: TranslationKeys = 'common:form.validations.required',
  tooLongDescription: TranslationKeys = 'common:form.validations.tooLongDescription',
) => Joi.string()
  .max(255)
  .required()
  .options({
    messages: {
      'string.empty': required,
      'any.required': required,
      'string.max': tooLongDescription,
    },
  });

const joiBudgetSchema = (
  required: TranslationKeys = 'common:form.validations.required',
  numberMax = 'common:form.validations.numberMax',
  numberPositive = 'common:form.validations.numberPositive',
) => Joi.number().positive().max(MAX_INT).required()
  .messages({
    'string.empty': required,
    'number.base': required,
    'number.max': numberMax,
    'number.unsafe': numberMax,
    'number.positive': numberPositive,
  });

export const joiTextField = (
  required: TranslationKeys = 'common:form.validations.required',
  tooLong: TranslationKeys = 'common:form.validations.tooLong',
  tooShort: TranslationKeys = 'common:form.validations.tooShort',
) => Joi.string()
  .trim()
  .max(50)
  .min(2)
  .messages({
    'string.empty': required,
    'string.max': tooLong,
    'string.min': tooShort,
  });

export const productFormSchema = Joi.object({
  production: joiShortFields(),
  name: joiShortFields(),
  model: joiShortFields(),
  tags: joiTagsRequired(),
  tagsData: joiTagsRequired(),
  productionGuarantee: joiShortFields(),
  description: joiDescription(),
  media: joiMedia(),
  cover: Joi.string().allow(''),
  userId: Joi.string(),
});

export const baseLoginSchema = Joi.object({
  email: joiEmail(),
  password: joiLoginPassword(),
});

export const registerSchema = Joi.object({
  email: joiEmail(),
  password: joiPassword(),
  name: joiName(),
  surname: joiSurname(),
  userName: joiUsername(),
  type: joiUserType(),
  phone: joiPhone(),
  company: Joi.alternatives()
    .conditional('type', {
      is: TypeUser.consumer,
      then: Joi.string().allow(''),
      otherwise: Joi.string().trim().required().min(2)
        .max(50)
        .messages({
          'string.empty': 'common:form.validations.required',
          'string.min': 'common:form.validations.companyTooShort',
          'string.max': 'common:form.validations.companyTooLong',
        }),
    }),
  confirmPassword: joiConfirmPassword(),
});

export const registerSellerSchema = registerSchema.keys({
  company: joiCompany(),
});

export const creatingOfferSchema = Joi.object({
  product: joiSellerProductSelectRequired(),
  price: joiOfferPrice(),
  description: joiDescription(),
  ecogood: Joi.boolean(),
  additionalConditions: joiAdditionalCondition(),
  media: joiMedia(),
  cover: Joi.string().allow(''),
  title: Joi.string().allow(''),
});

export const creatingRequestSchema = Joi.object({
  budget: joiBudgetSchema(),
  tags: joiTagsRequired(),
  products: joiProductSelectRequired(),
  description: joiDescription(),
  media: joiMedia(),
  title: Joi.string().min(1).max(255).required()
    .messages({
      'string.min': 'common:form.validations.required',
      'string.max': 'common:form.validations.requestNameTooLong',
      'string.empty': 'common:form.validations.required',
    }),
});

export const sellerProfileSchema = Joi.object({
  name: joiName(),
  surname: joiSurname(),
  userName: joiUsername(),
  phone: joiPhone(),
  company: joiCompany(),
  avatar: Joi.optional(),
});

export const sellerSettingsSchema = Joi.object({
  emails: Joi.boolean(),
  tags: Joi.array(),
});

export const consumerProfileSchema = Joi.object({
  name: joiName(),
  surname: joiSurname(),
  userName: joiUsername(),
  phone: joiPhone(),
  avatar: Joi.optional(),
});

export const chatMessageSendSchema = Joi.object({
  text: Joi.string().allow('').max(CHAT_MESSAGE_LENGTH_MAX).messages({
    'string.max': 'common:chat.validations.messageTooLong',
  }),
  images: Joi.array().items(Joi.object().keys({
    image: Joi.object().unknown(true),
    preview: Joi.string(),
    width: Joi.number().max(MEDIA_RESTRICTIONS.IMAGE_CHAT_MAX_SIZE),
    height: Joi.number().max(MEDIA_RESTRICTIONS.IMAGE_CHAT_MAX_SIZE),
    imagePixelsCount: Joi.number().max(MEDIA_RESTRICTIONS.IMAGE_MAX_PIXELS_COUNT),
    imageSize: Joi.number().max(MEDIA_RESTRICTIONS.FILE_MAX_SIZE),
  })).max(10).messages({
    'array.max': 'common:chat.validations.toManyImages',
  }),
}).or('text', 'images');

export const emailFormSchema = Joi.object({
  email: joiEmail().required(),
});

export const resetPasswordSchema = Joi.object({
  email: joiEmail(),
  password: joiPassword(),
  confirmPassword: joiConfirmPassword(),
  code: joiCode(),
});

export const profileFormSchema = Joi.object({
  name: joiTextField(),
  surname: joiTextField(),
  avatar: Joi.optional(),
});

export const sellerProfileFormSchema = profileFormSchema.keys({
  company: joiTextField(),
});
