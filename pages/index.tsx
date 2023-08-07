import React, { useState } from 'react'
import Button from '@mui/material/Button'
import FileUpload from '@/components/fileupload'
type Props = {}
const Home = (props: Props) => {
	const [fileData, setFileData] = useState<string>('')
	const handleFileChange = (data: string) => {
		setFileData(data)
	}
	return (
		<>
			<h1>File Upload</h1>
			<FileUpload onFileChange={handleFileChange} />
			{/* Display or process the file data as needed */}
			<pre>{fileData}</pre>
			<Button> Deneme butonu </Button>
		</>
	)
}

export default Home
