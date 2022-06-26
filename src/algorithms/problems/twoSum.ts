{
  //   /**
  //    * two-sum 문제
  //    *
  //    * 두 수를 합해 10이 되는 두 수가 있다면 true, 없다면 false를 반환한다.
  //    * 두 twoSum 함수는 결국 같은 방법으로 O(N^2)의 시간복잡도를 가진다.
  //    * */
  const numbers1: number[] = [2, 0, 4, 1, 7, 9];
  const numbers2: number[] = [2, 1, 4, 1, 9, 9];
  const numbers3: number[] = [0, 1, 4, 1, 0, 2];

  function twoSum(numbers: number[]): boolean {
    numbers.forEach((outer: number): void => {
      numbers.forEach((inner: number): void => {
        if (outer + inner === 10) {
          throw true;
        }
      });
    });
    return false;
  }

  function twoSum2(numbers: number[]): boolean {
    for (let i: number = 0; i < numbers.length; i++) {
      for (let j: number = 0; j < numbers.length; j++) {
        if (i !== j && numbers[i] + numbers[j] === 10) {
          return true;
        }
      }
    }
    return false;
  }
  const result2: boolean = twoSum2(numbers2);
  console.log("result2>>>>>>>>>>", result2);

  /**
   * counterPart hash table은 문제의 요청 사항중 10 이하의 자연수에 대해
   *
   * 보수를 저장하는 hash table이다.
   *
   * 만일 숫자 배열이 [2,0,8]이 들어왔다고 가정하면
   *
   * const hash = {
   * 8:true,
   * 10:true,
   * 2:true
   * } 이러한 형태로 저장 될 것이다.
   *
   * 이제 순서대로 로직을 따라가면
   *
   * [2,0,8]을 기준으로
   * hash에 8이라는 key는 없으므로 {2:true}를 추가한다.
   * (이 시점에서 배열에 8이 있으면 이 알고리즘은 그 때 끝날 준비가 완료된 상태이다.)
   * hash에 10이라는 key는 없으므로 {0:true}를 추가한다.
   * hash에 2라는 key를 찾았다! true를 반환해주면 된다.
   *
   */

  function twoSumWithHash(numbers: number[]): boolean {
    const counterPartHash: { [key: number]: boolean } = {};

    for (let i: number = 0; i < numbers.length; i++) {
      console.log("counterPart", counterPartHash);
      if (counterPartHash[10 - numbers[i]]) {
        return true;
      }
      counterPartHash[numbers[i]] = true;
    }
    return false;
  }

  const foo: boolean = twoSumWithHash([2, 0, 8]);
  console.log("foo >>>>>>>", foo);
}
