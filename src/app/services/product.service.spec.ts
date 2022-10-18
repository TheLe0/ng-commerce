import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductService } from './product.service';

describe('HeroService', () => {
    let service: ProductService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, RouterTestingModule],
            providers: [ProductService]
        });
        service = TestBed.inject(ProductService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});