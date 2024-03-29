export class Panic extends Error {
	private static defaultName = "Panic"

	constructor(messageOrError: string | Error) {
		if (messageOrError instanceof Error) {
			const error = messageOrError
			super(error.message)
			this.name = `${Panic.defaultName}: ${error.name}`
			if (error.stack) {
				this.stack = error.stack
			}
		} else {
			const message = messageOrError
			super(message)
			this.name = Panic.defaultName
		}
	}
}
