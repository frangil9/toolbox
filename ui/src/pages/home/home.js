import React, { useState, useEffect } from "react";
import "./home.css";
import { Row, Col, Button, Form, Spinner, Table, Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getFilesDataThuk } from "../../redux/actions/filesAction";

const Home = () => {
  const [fileName, setFileName] = useState("");
  const dispatch = useDispatch();
  const { error, loading, files } = useSelector((state) => ({
    error: state.error,
    loading: state.loading,
    files: state.files,
  }));

  useEffect(() => {
    dispatch(getFilesDataThuk());
  }, []);

  const handleChangeName = (e) => {
    const value = e.target.value;
    setFileName(value);
  };

  const onSearch = () => {
    dispatch(getFilesDataThuk(fileName));
  };

  return (
    <>
      <div className="wrapper-main-content">
        <div className="main-content">
          <div className="home_container">
            <h3>File List</h3>
            <Row className="align-items-end mb-3">
              <Col xs="auto" className="flex">
                <Form.Control
                  type="text"
                  placeholder="File Name"
                  onChange={handleChangeName}
                  defaultValue={fileName}
                  name="name"
                />
                <Button type="button" variant="primary" onClick={onSearch}>
                  Buscar
                </Button>
              </Col>
            </Row>
            {files.length > 0 && !loading && (
              <div className="home_wrapper">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>File Name</th>
                      <th>Text</th>
                      <th>Number</th>
                      <th>Hex</th>
                    </tr>
                  </thead>
                  <tbody>
                    {files.map((item, i) => (
                      <tr key={i}>
                        <td>{item.file}</td>
                        <td>{item.text}</td>
                        <td>{item.number}</td>
                        <td>{item.hex}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            )}
            {loading && (
              <div className="align-items-center">
                <Spinner animation="border" />;
              </div>
            )}
            {files.length === 0 && !loading && (
              <Alert variant="danger" className="align-items-center">
                No se encontraron resultados disponibles para los filtros
                aplicados
              </Alert>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
