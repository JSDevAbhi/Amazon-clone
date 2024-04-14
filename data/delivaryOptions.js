export const delivaryOptionns = [
  {
    id: "1",
    delivaryDays: 7,
    priceCents: 0,
  },
  {
    id: "2",
    delivaryDays: 3,
    priceCents: 399,
  },
  {
    id: "3",
    delivaryDays: 1,
    priceCents: 999,
  },
];

export function getDelivaryOption(delivaryOptionId){
  let delivaryOption;

  delivaryOptionns.forEach(( option ) =>{
  if(option.id === delivaryOptionId) {
      delivaryOption = option;
  }
  });
  return delivaryOption;
}