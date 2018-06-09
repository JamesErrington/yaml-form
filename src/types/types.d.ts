declare interface IForm {
  meta : IFormMeta
  body : IFormElement[]
}

declare interface IFormMeta {
  id : string
  action : string
  method : string
  target : string
  // options
}

declare type IFormElement = ITextInput | IPasswordInput | IEmailInput | IDateInput;

declare interface ITextInput {
  type : 'text'
  id : string
  name : string
  label : string
  // options
}

declare interface IPasswordInput {
  type : 'password'
  id : string
  name : string
  label : string
  // options
}

declare interface IEmailInput {
  type : 'email'
  id : string
  name : string
  label : string
  // options
}

declare interface IDateInput {
  type : 'date'
  id : string
  name : string
  label : string
  // options
}
