export function validateForm(formName: string): MethodDecorator {
  // tslint:disable-next-line: ban-types
  return (target: Function, key: string, descriptor: any) => {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
      if (this[formName].invalid) {
        Object.keys(this[formName].controls).map((control) => {
          this[formName].controls[control].markAsDirty();
          this[formName].controls[control].markAsTouched();
        });
        return;
      }
      const result = originalMethod.apply(this, args);
      return result;
    };

    return descriptor;
  };
}
