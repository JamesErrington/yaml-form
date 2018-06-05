declare interface IForm {
  form_meta : IFormMeta
  body : IFormElement[]
}

declare interface IFormMeta {
  id : string
  class : string
  action : string
  method : string
  target : string
  // options
}

declare type IFormElement = ITextInput | IPasswordInput | IEmailInput;

declare interface ITextInput {
  type : 'text'
  id : string
  class : string
  name : string
  label : string
  // options
}

declare interface IPasswordInput {
  type : 'password'
  id : string
  class : string
  name : string
  label : string
  // options
}

declare interface IEmailInput {
  type : 'email'
  id : string
  class : string
  name : string
  label : string
  // options
}

declare interface IDateInput {
  type : 'date'
  id : string
  class : string
  name : string
  label : string
  // options
}

/*
declare interface IForm {
  form_meta : IFormMeta
  body : IFormElement[]
}

declare interface IFormMeta extends ICommon {
  type : 'meta'
  accept_charset? : string

  autocomplete? : string
  enctype? : string

  novalidate? : string

}

declare type IFormElement = ITextInput | IDateInput | IChoiceGroup | ISumbitInput | IFormMeta;

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

declare interface IDateInput extends ICommon {
  type : 'date'
  max? : string
  min? : string
  pattern? : string
  required? : string
  value? : string
  label? : string
}

declare interface IChoiceGroup extends ICommon {
  type : 'radio' | 'checkbox'
  choices : IChoice[]
}

declare interface IChoice {
  id : string
  label? : string
  value? : string
}

declare interface ISumbitInput extends ICommon {
  type : 'submit'
  label? : string
}
*/
