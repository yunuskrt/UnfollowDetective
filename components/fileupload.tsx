import React, { ChangeEvent } from 'react'

type Props = {
	onFileChange: (fileData: string) => void
}

const FileUpload = ({ onFileChange }: Props) => {
	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]

		if (file) {
			const reader = new FileReader()
			reader.readAsText(file, 'UTF-8')
			reader.onload = (event) => {
				if (event.target?.result) {
					onFileChange(event.target.result as string)
				}
			}
		}
	}

	return <input type='file' accept='.csv,.txt' onChange={handleFileChange} />
}

export default FileUpload
