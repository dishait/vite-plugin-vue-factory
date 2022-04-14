export type Status =
	| 'initial'
	| 'success'
	| 'fail'
	| 'pending'

export interface IProgresser {
	status: Status
	open: Function
	close: Function
	percentage: number
	useStatus: (v?: Status) => Status
	usePercentage: (v?: number) => number
}
