let x = 1

if (x == null && typeof x == 'number') {
  x = 2
}

const f = <T>(x: T) => x
f(x == null)
f((x == null) || false)
f(x == null || false)
export const c = (x != null) && (x == null) && (x != null)

export default x
