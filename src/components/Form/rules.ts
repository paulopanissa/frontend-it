export const passwordVerify = {
  message: field =>
    ` O ${field} é necessário um caracter maiusculo e um especial`,
  validate: value => {
    const strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    return strongRegex.test(value);
  }
};
