// variáveis para validar os valores dos atributos, se estão dentro do range de 0 a 90.
const minAttrValue = 0;
const maxAttrValue = 90;

// função para validar se o valor do atributo está dentro do range de 0 a 90.
const isInRange = (value) => (
  Number(value) >= minAttrValue && Number(value) <= maxAttrValue
);

export default isInRange;
