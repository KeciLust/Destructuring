export default function arr(obj) {
  const arrFinish = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < obj.special.length; i++) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = obj.special[i];
    arrFinish.push({
      id, name, icon, description,
    });
  }

  return arrFinish;
}
