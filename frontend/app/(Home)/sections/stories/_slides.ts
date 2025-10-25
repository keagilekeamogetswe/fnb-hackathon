export const SlideOrder = (() => {
  return {
    getOrder: (index:number, length:number) => {
      let unordered: number[] = [];
      for (let i = 0; i < length; i++) {
        unordered.push(i);
      }

      let ordered: number[] = [];
      unordered.slice(index, length)
        .forEach((i) =>
          ordered.push(i)
        );

      unordered.slice(0, index )
      .forEach((i) =>
        ordered.push(i)
      );
      console.log(ordered);
      return ordered;


    }
  }
})()