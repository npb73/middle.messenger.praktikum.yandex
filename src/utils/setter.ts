// eslint-disable-next-line
export type Indexed<T = any> = {
  [key in string]: T;
};

function merge(lhs: Indexed, rhs: Indexed): Indexed {
  // eslint-disable-next-line
  for (const p in rhs) {
    if (!rhs.hasOwnProperty(p)) {
      continue;
    }
    try {
      if (rhs[p].constructor === Object) {
        rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
      } else {
        lhs[p] = rhs[p];
      }
    } catch (e) {
      lhs[p] = rhs[p];
    }
  }

  return lhs;
}

export function setter(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
  if (typeof object !== 'object' || object === null) {
    return object;
  }

  if (typeof path !== 'string') {
    throw new Error('path must be string');
  }

  const result = path.split('.').reduceRight<Indexed>(
    (acc, key) => ({
      [key]: acc,
    }),
    // eslint-disable-next-line
    value as any
  );

  return merge(object as Indexed, result);
}
