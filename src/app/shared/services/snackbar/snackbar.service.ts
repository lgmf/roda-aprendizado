import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';


@Injectable()
export class SnackbarService {

    constructor(
        private snackBar: MatSnackBar
    ) { }

    openSnackbar(message: string, confirmButtonText: string, duration: number) {
        this.snackBar.open(message, confirmButtonText, {
            duration: duration
        });
    }
}
