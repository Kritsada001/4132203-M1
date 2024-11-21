#include <iostream>
#include <iomanip>
#include <cstdint>

using namespace std;

int main() {
    int matrixA[3][3] = { {3, 2, 1}, {4, 2, 5}, {12, 4, 6} };

    cout << "Matrix A" << endl;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            cout << setw(4) << matrixA[i][j]; 
        }
        cout << endl;
    }

    cout << "\nResult Location" << endl;
    uintptr_t base_A = (uintptr_t)matrixA;
    size_t eSize = sizeof(int);

    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            uintptr_t realLoc = (uintptr_t)&matrixA[i][j];
            uintptr_t calcLoc = base_A + (i * 3 + j) * eSize;

            cout << "Loc " << i << "," << j
                 << " Value: " << matrixA[i][j]
                 << "   Real Location: " << realLoc
                 << "   Calculated Location: " << calcLoc << endl;
        }
    }

    return 0;
}
