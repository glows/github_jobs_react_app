import React, {useState} from 'react'
import { Card, Badge, Collapse, Button } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
export default function Job({ job }) {
    const [open, setOpen] = useState(false)
    return (
        <Card className="mt-3">
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <div>
                        <Card.Title>
                        {job.title} - <span className="text-muted font-weight-light">{job.company}</span>

                        </Card.Title>
                        <Card.Subtitle className="text-muted md-2">
                            {new Date(job.created_at).toLocaleDateString()}
                        </Card.Subtitle>
                        <Badge variant="secondary" className="mr-2">
                            {job.type}
                        </Badge>
                        <Badge variant="secondary" className="mr-2">
                            {job.location}
                        </Badge>
                        <div style={{ wordBreak: "break-all"}}>
                            <ReactMarkdown source={job.how_to_apply} />
                        </div>
                    </div>

                    <img className="d-none d-md-block" height="50" alt={job.company} src={job.company_logo}/>
                </div>

                <Card.Text>
                    <Button
                    onClick={() => setOpen(open => !open)}
                    >
                        {open? 'Hide Details': 'View Details'}
                    </Button>
                    <Collapse in={open}>
                    <div className="mt-4">
                        <ReactMarkdown source={job.description} />
                    </div>
                    </Collapse>
                    
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
