function makeMeta(schema : string[], definition : IFormMeta, config? : IConfig) : string {
  let text = '';
  for(const attribute of schema) {
    // @ts-ignore: we are checking for undefined already
    const value = definition[attribute];
    if(value) {
      text += ` ${attribute.replace('_', '-')}="${value}"`;
      continue;
    }
    // If this attribute is required we need to throw an error
    if(config && (config.required.form.indexOf(attribute) !== -1)) {
      throw new Error(`Undefined required attribute '${attribute}'`);
    }
  }
  return text;
}

export { makeMeta };
