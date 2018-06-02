declare interface IForm {
  form_meta : IFormMeta
  body : IFormElement[]
}

declare interface IFormMeta extends ICommon {
  type : 'meta'
  accept_charset? : string
  action? : string
  autocomplete? : string
  enctype? : string
  method? : string
  novalidate? : string
  target? : string
}

declare type IFormElement = ITextInput | IRadioGroup | ISumbitInput | IFormMeta;

declare interface ICommon {
  id? : string
  name? : string
}

declare interface ITextInput extends ICommon {
  type : 'text'
  autocomplete? : string
  list? : string
  maxLength? : string
  minLength? : string
  pattern? : string
  placeholder? : string
  required? : string
  value? : string
  label? : string
}

declare interface IRadioGroup extends ICommon {
  type : 'radio'
  choices : IRadioChoice[]
}

declare interface IRadioChoice {
  id : string
  label? : string
  value? : string
}

declare interface ISumbitInput extends ICommon {
  type : 'submit'
  label? : string
}
