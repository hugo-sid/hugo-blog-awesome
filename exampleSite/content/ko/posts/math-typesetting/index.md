---
author: Hugo Authors
title: 수학 조판  - 블로그 포스트에 수학적 표기법 사용하기
date: 2023-04-01
description: KaTeX를 설정하는 간결한 가이드
math: true
---

Hugo 프로젝트에서 수학적 표기법은 [제 3자 자바스크립트 라이브러리](https://github.com/hugo-sid/hugo-blog-awesome/blob/main/layouts/partials/helpers/katex.html)를 통해 활성화할 수 있습니다.

<!--more-->

이 예제에서는 [KaTeX](https://katex.org/)를 사용합니다.

- KaTeX를 전역적으로 활성화하려면, 프로젝트 설정 파일에 파라미터 `math`를 `true`로 다음과 같이 설정하세요.
  - `hugo.toml`
    ```toml
    [params]
      math = true
    ```
  - `hugo.yaml`
    ```yaml
    params:
      math: true
    ```
- KaTeX를 특정 페이지에서만 활성화하려면, 컨텐츠 파일의 머리말에 `math: true`를 다음과 같이 포함하세요.

  ```
  ---
  math: true
  ---
  ```

**참고:** [지원하는 TeX 함수](https://katex.org/docs/supported.html)에 대한 온라인 참고 자료는 유용한 자료입니다.

### 예제

- 수학 블록:

  $$
  \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
  $$

- 인라인 수학:

  이것은 인라인 다항식입니다: $5x^2 + 2y -7$.
