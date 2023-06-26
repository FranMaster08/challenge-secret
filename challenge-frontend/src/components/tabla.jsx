import React, { useEffect, useState } from "react";
import { Table, Form, Button } from "react-bootstrap";
import axios from "axios";

const TablaFiles = () => {
  const [data, setData] = useState([]);
  const [searchFileName, setSearchFileName] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/files/data");
      setData([...response.data]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:3000/files/data?fileName=${searchFileName}`
      );
      setData([...response.data]);
    } catch (error) {
      console.error("Error searching data:", error);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSearch}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Search by filename"
            value={searchFileName}
            onChange={(e) => setSearchFileName(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Filename</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) =>
            item.line?.map((line, lineIndex) => (
              <tr key={`${index}-${lineIndex}`}>
                <td>{item.file}</td>
                <td>{line.text}</td>
                <td>{line.number}</td>
                <td>{line.hex}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default TablaFiles;
