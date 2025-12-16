+++
title = 'Implementing the Simplex Method in C'
date = 2024-07-04T19:54:38+05:45
draft = false
+++

### Overview
The Simplex method is an algorithm for solving linear programming problems. This program takes the number of equations and variables as input, along with their coefficients, and then performs the Simplex method to find the optimal solution.

### Step 1: Include the Standard I/O Library
The program begins by including the standard input-output library for handling input and output functions.

```c
#include <stdio.h>
```

### Step 2: Main Function
The `main` function is where the program execution starts. It declares variables, collects inputs, and performs the Simplex algorithm.

```c
int main() {
    int a, b, i, j, k, pc, pr, count;
    float pe, min_ratio, ratio, pc_check, store;
```

### Step 3: Input Number of Equations and Variables
The program prompts the user to enter the number of equations and variables.

```c
    printf("Enter number of equations ");
    scanf("%d", &a);
    printf("Enter number of variables ");
    scanf("%d", &b);
```

### Step 4: Declare and Initialize Tables
We initialize arrays to store the coefficients of the constraints and the objective function.

```c
    float table[a][b];
    float rhs[a];
    float obj[a];
    int row = a + 1;
    int col = a + b + 1;
    float table2[row][col];
```

### Step 5: Input Coefficients of Equations
The program asks for the coefficients of each equation and the right-hand side (RHS) values.

```c
    printf("\n\n Enter coefficient of equations \n ");
    for (i = 1; i <= a; i++) {
        printf("\n For ROW %d\n ", i);
        for (j = 1; j <= b; j++) {
            printf("\t\tEnter the coefficient X%d%d:  ", i, j);
            scanf("%f", &table[i][j]);
        }
        printf("\t\tEnter the coefficient of RHS%d:   ", i);
        scanf("%f", &rhs[i]);
    }
```

### Step 6: Input Coefficients of Objective Function
The program then asks for the coefficients of the objective function.

```c
    printf("\n Enter coefficients of the objective function\n");
    for (j = 1; j <= b; j++) {
        printf("\t\tEnter the coefficient X%d%d:  ", i, j);
        scanf("%f", &obj[j]);
    }
```

### Step 7: Initialize Simplex Table
We set up the initial Simplex table, including slack variables.

```c
    for (i = 1; i < row; i++) {
        for (j = 1; j <= col; j++) {
            if (j <= b) {
                table2[i][j] = table[i][j];
            }
            if (j > b) {
                if (j == b + i) {
                    table2[i][j] = 1.0;
                } else {
                    table2[i][j] = 0.0;
                }
            }
            if (j == col) {
                table2[i][col] = rhs[i];
            }
        }
    }
    for (j = 1; j <= col; j++) {
        if (j <= b) {
            table2[row][j] = -obj[j];
        }
        if (j > b) {
            table2[row][j] = 0.0;
        }
    }
```

### Step 8: Perform the Simplex Algorithm
The main loop of the algorithm iterates until the optimal solution is found.

```c
    while (1) {
        for (k = 1; k <= col; k++) {
            printf("\n Iteration %d \n ", k - 1);
            for (j = 1; j < col; j++) {
                printf("\t X%d", j);
            }
            printf("\t RHS \n");
            for (i = 1; i <= row; i++) {
                for (j = 1; j <= col; j++) {
                    printf("\t%0.2f", table2[i][j]);
                }
                printf("\n");
            }

            // Find pivot column
            pc = 1, pc_check = 0, count = 0;
            for (j = 1; j <= col; j++) {
                if (table2[row][j] < 0) {
                    if (pc_check > table2[row][j]) {
                        pc_check = table2[row][j];
                        pc = j;
                        count = 1;
                    }
                }
                if (j == col && count == 0) {
                    goto okay;
                }
            }

            // Find pivot row
            pr = 0, pe = 1, min_ratio = 1;
            for (i = 1; i <= a; i++) {
                if (table2[i][pc] > 0) {
                    ratio = table2[i][col] / table2[i][pc];
                    if (pr == 0) {
                        min_ratio = table2[i][col] / table2[i][pc];
                        count++;
                        pe = table2[i][pc];
                        pr = i;
                    }
                    if (min_ratio >= ratio && pr != 0) {
                        if (min_ratio == ratio) {
                            if (table2[i][pc] < pe) {
                                pe = table2[i][pc];
                                pr = i;
                            }
                        } else {
                            min_ratio = ratio;
                            pr = i;
                            pe = table2[i][pc];
                        }
                    }
                }
                if (table2[i][pc] < 0 && i == a) {
                    printf("\n\tUnbounded solution\n");
                    return 0;
                }
            }

            // Update pivot row
            for (j = 1; j <= col; j++) {
                table2[pr][j] = table2[pr][j] / pe;
            }
            // Update other rows
            for (i = 1; i <= row; i++) {
                float pcoff = table2[i][pc];
                for (j = 1; j <= col; j++) {
                    if (i != pr) {
                        table2[i][j] = table2[i][j] - (table2[pr][j]) * pcoff;
                    }
                }
            }
        }
    }
okay:
```

### Step 9: Print the Optimal Solution
Once the algorithm finds the optimal solution, it prints the results.

```c
    for (i = 0; i <= row; i++) {
        for (j = 0; j <= b; j++) {
            if (table2[i][j] == 1) {
                printf(" \t For X%d == %0.3f , ", j, table2[i][col]);
            }
        }
    }
    printf("The optimum value is %0.3f\n ", table2[row][col]);
    return 0;
}
```

### Full Code
Here is the complete code for reference:

```c
#include <stdio.h>

int main() {
    int a, b, i, j, k, pc, pr, count;
    float pe, min_ratio, ratio, pc_check, store;

    printf("Enter number of equations ");
    scanf("%d", &a);
    printf("Enter number of variables ");
    scanf("%d", &b);

    float table[a][b];
    float rhs[a];
    float obj[a];
    int row = a + 1;
    int col = a + b + 1;
    float table2[row][col];

    printf("\n\n Enter coefficient of equations \n ");
    for (i = 1; i <= a; i++) {
        printf("\n For ROW %d\n ", i);
        for (j = 1; j <= b; j++) {
            printf("\t\tEnter the coefficient X%d%d:  ", i, j);
            scanf("%f", &table[i][j]);
        }
        printf("\t\tEnter the coefficient of RHS%d:   ", i);
        scanf("%f", &rhs[i]);
    }

    printf("\n Enter coefficients of the objective function\n");
    for (j = 1; j <= b; j++) {
        printf("\t\tEnter the coefficient X%d%d:  ", i, j);
        scanf("%f", &obj[j]);
    }

    for (i = 1; i < row; i++) {
        for (j = 1; j <= col; j++) {
            if (j <= b) {
                table2[i][j] = table[i][j];
            }
            if (j > b) {
                if (j == b + i) {
                    table2[i][j] = 1.0;
                } else {
                    table2[i][j] = 0.0;
                }
            }
            if (j == col) {
                table2[i][col] = rhs[i];
            }
        }
    }
    for (j = 1; j <= col; j++) {
        if (j <= b) {
            table2[row][j] = -obj[j];
        }
        if (j > b) {
            table2[row][j]

 = 0.0;
        }
    }

    while (1) {
        for (k = 1; k <= col; k++) {
            printf("\n Iteration %d \n ", k - 1);
            for (j = 1; j < col; j++) {
                printf("\t X%d", j);
            }
            printf("\t RHS \n");
            for (i = 1; i <= row; i++) {
                for (j = 1; j <= col; j++) {
                    printf("\t%0.2f", table2[i][j]);
                }
                printf("\n");
            }

            pc = 1, pc_check = 0, count = 0;
            for (j = 1; j <= col; j++) {
                if (table2[row][j] < 0) {
                    if (pc_check > table2[row][j]) {
                        pc_check = table2[row][j];
                        pc = j;
                        count = 1;
                    }
                }
                if (j == col && count == 0) {
                    goto okay;
                }
            }

            pr = 0, pe = 1, min_ratio = 1;
            for (i = 1; i <= a; i++) {
                if (table2[i][pc] > 0) {
                    ratio = table2[i][col] / table2[i][pc];
                    if (pr == 0) {
                        min_ratio = table2[i][col] / table2[i][pc];
                        count++;
                        pe = table2[i][pc];
                        pr = i;
                    }
                    if (min_ratio >= ratio && pr != 0) {
                        if (min_ratio == ratio) {
                            if (table2[i][pc] < pe) {
                                pe = table2[i][pc];
                                pr = i;
                            }
                        } else {
                            min_ratio = ratio;
                            pr = i;
                            pe = table2[i][pc];
                        }
                    }
                }
                if (table2[i][pc] < 0 && i == a) {
                    printf("\n\tUnbounded solution\n");
                    return 0;
                }
            }

            for (j = 1; j <= col; j++) {
                table2[pr][j] = table2[pr][j] / pe;
            }
            for (i = 1; i <= row; i++) {
                float pcoff = table2[i][pc];
                for (j = 1; j <= col; j++) {
                    if (i != pr) {
                        table2[i][j] = table2[i][j] - (table2[pr][j]) * pcoff;
                    }
                }
            }
        }
    }

okay:
    for (i = 0; i <= row; i++) {
        for (j = 0; j <= b; j++) {
            if (table2[i][j] == 1) {
                printf(" \t For X%d == %0.3f , ", j, table2[i][col]);
            }
        }
    }
    printf("The optimum value is %0.3f\n ", table2[row][col]);
    return 0;
}
```

### Explanation
- **Input Handling**: The program first asks the user for the number of equations and variables, then it collects the coefficients of these equations and the objective function.
- **Simplex Table Initialization**: The constraints and the objective function are organized into an augmented matrix form (Simplex table).
- **Simplex Iteration**: The program iteratively updates the Simplex table, selecting pivot elements to improve the objective function until the optimal solution is reached.
- **Output**: Finally, it prints the values of the variables and the optimal value of the objective function.

