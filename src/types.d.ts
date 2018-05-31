declare interface IFormMeta {
  [accept_charset : string] : string
  action : string
  autocomplete : string
  enctype : string
  method : string
  name : string
  novalidate : string
  target : string
}

declare interface IConfig {
  required : {
    form : {
      [action : string] : boolean
      method : boolean
    };
  };
}
