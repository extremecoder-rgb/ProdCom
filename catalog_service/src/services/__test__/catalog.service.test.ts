import { ICatalogRepository } from "../../interface/catalogRepository.interface";
import { MockCatalogRepository } from "../../repository/mockCatalog.repository";
import { CatalogService } from "../catalog.service";


describe("CatalogService", () => {


    let repository: ICatalogRepository;
    beforeEach(() => { 
        repository = new MockCatalogRepository();
    });

     afterEach(() => {
        repository = {} as MockCatalogRepository;
     });

    describe("createProduct", () => {
        test("should create a product successfully", async () => {
            const service = new CatalogService(repository);

            const reqBody = {
                name: "Test Product",
                description: "This is a test product",
                price: 100, 
                stock: 1200,
            }
            const result = await service.createProduct(reqBody);
            expect(result).toMatchObject({
                id: expect.any(Number),
                name: expect.any(String),
                description: expect.any(String),
                price: expect.any(Number),
                stock : expect.any(Number),
            });
         });

        test("should throw an error when product creation fails", () => {});
    });
   
});