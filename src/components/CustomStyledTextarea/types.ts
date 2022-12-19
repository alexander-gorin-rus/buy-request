import React from 'react';

export interface ITextareaProps {
  disabled?: boolean;
  error?: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  label?: string;
  primary?: boolean;
  placeholder?: string;
  allowableAmount?: number;
}

export interface ITextareaWithCountProps {
  error?: React.ReactNode;
}
