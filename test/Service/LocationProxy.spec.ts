import {LocationProxy} from "../../src/app/Service/LocationProxy";
import {LocationMock} from "../Mock/LocationMock";

describe('Module: Location', () => {
    describe('Class: LocationProxy', () => {

        describe('After Instantiation', () => {
            let subject: LocationProxy;

            beforeEach(() => {
                subject = new LocationProxy(<any>new LocationMock());
            });

            describe('Method: Go', () => {
                it('should call a service method', () => {
                    let called = false;
                    subject.location.go = () => {
                        called = true;
                    };
                    subject.go('url');
                    expect(called).toBeTruthy();
                });
                it('should call events', () => {
                    let calledOnGo = false;
                    let calledOnChange = false;
                    subject.onGo.first().subscribe(() => {
                        calledOnGo = true;
                    });
                    subject.onGo.first().subscribe(() => {
                        calledOnChange = true;
                    });
                    subject.go('aha');
                    expect(calledOnChange).toBeTruthy('onChange');
                    expect(calledOnGo).toBeTruthy('onGo');
                })
            });
            describe('Method: Replace State', () => {
                it('should call a service method', () => {
                    let called = false;
                    subject.location.replaceState = () => {
                        called = true;
                    };
                    subject.replaceState('url');
                    expect(called).toBeTruthy();
                });
                it('should call events', () => {
                    let calledOnReplaceState = false;
                    let calledOnChange = false;
                    subject.onReplaceState.first().subscribe(() => {
                        calledOnReplaceState = true;
                    });
                    subject.onChange.first().subscribe(() => {
                        calledOnChange = true;
                    });
                    subject.replaceState('aha');
                    expect(calledOnChange).toBeTruthy('onChange');
                    expect(calledOnReplaceState).toBeTruthy('onReplaceState');
                })
            });
            describe('Method: Path', () => {
                it('should return the value of the service method', () => {
                    subject.location.path = () => {
                        return 'works!';
                    };
                    expect(subject.path()).toEqual(subject.location.path());
                });
            });
        });

    });
});
