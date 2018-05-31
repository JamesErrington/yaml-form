function makeMeta(schema : string[], definition : IFormMeta, config? : IConfig) : string {
  let string = '';
  for(const attribute of schema) {
    const value = definition[attribute];
    if(value) {
      string += ` ${attribute.replace('_', '-')}="${value}"`;
    }
  };
  return string;
}

export { makeMeta };
