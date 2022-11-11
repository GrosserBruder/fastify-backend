export function Controller(): ClassDecorator {
  return (target) => {
    console.log(target)
  }
}