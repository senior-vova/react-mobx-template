class Token {
  private field: string = "";

  constructor(field: string) {
    this.field = field;
  }

  public set(value: string): void {
    localStorage.setItem(this.field, value);
  }

  public get(): string | null {
    return localStorage.getItem(this.field);
  }

  public clear(): void {
    localStorage.removeItem(this.field);
  }
}

export const token = new Token("token");
