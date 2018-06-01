declare interface IForm {
  form_meta : IFormElement
  body : IInputElement[]
}

declare interface IHTMLElement {
  id? : string
  class? : string
  style? : string
  name? : string
}

declare interface IFormElement extends IHTMLElement {
  accept_charset? : string
  action? : string
  autocomplete? : string
  enctype? : string
  method? : string
  novalidate? : string
  target? : string
}

declare interface IInputElement extends IHTMLElement {
  type? : string
}

declare interface ITextInputElement extends IInputElement {
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

declare interface IConfig {
  required : {
    form : string[]
  };
}
