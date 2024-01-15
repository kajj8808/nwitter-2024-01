/** class name에 삼항 연산자를 사용할 경우 사용하는 함수 입니다. */
export function cls(...classnames: string[]) {
  return classnames.join(" ");
}
