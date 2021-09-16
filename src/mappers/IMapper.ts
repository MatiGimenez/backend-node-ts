export interface Mapper<T> {
	toEntity(raw: any): T;
	toDTO(t: T): any;
}
