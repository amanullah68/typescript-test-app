import { Container, Service } from 'typedi';
import { Request, Response } from 'express';


export const testInjection = (req: Request, res: Response) => {
    
@Service()
class ExampleInjectedService {
  printMessage() {
    console.log('I am alive!');
  }
}

@Service()
class ExampleService {
  constructor(
    // because we annotated ExampleInjectedService with the @Service()
    // decorator TypeDI will automatically inject an instance of
    // ExampleInjectedService here when the ExampleService class is requested
    // from TypeDI.
    public injectedService: ExampleInjectedService
  ) {}
}

const serviceInstance = Container.get(ExampleService);
console.log(serviceInstance);
// we request an instance of ExampleService from TypeDI

serviceInstance.injectedService.printMessage();
res.send("success");
};