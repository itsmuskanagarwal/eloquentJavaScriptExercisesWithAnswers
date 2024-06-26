const n = 10;

for ( i = 1; i <= n; i++) {
    let hash = '';
    for (let j = 1; j <= i; j++) { // Loop from 1 to i (inclusive)
      hash += '#';
    }
    console.log(hash);
  }

  /*
  This is the dry run:-
  Round 1 :-
  i = 1
  1 <= 10(true, i <= n)
  hash = ''
  j = 1
  1 <= 1(true, j <= i)
  hash = #

  j = 2 --> j + 1(increment)
  2 <= 1(FALSE, j <= i)

  Round 2:
  i = 2 --> i + 1(increment)
  2 <= 10(True, i <= n)

  hash = ''
  j = 1
  1 <= 2(true, j <= i)
  hash = #

  j = 2 --> i + 1(increment)
  2 <= 2(True, j <= i)
  hash = ##

  j = 3 --> j + 1(increment)
  3 <= 2(FALSE, j <= i)

  */