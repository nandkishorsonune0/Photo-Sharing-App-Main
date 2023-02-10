import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Header, Postview } from "../PostView/postview";
import * as ReactBootstrap from "react-bootstrap";
import ReactPaginate from "react-paginate";

export default function Main() {
  const [users, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);

  const postperpage = 2;

  const postvisited = pageNumber * postperpage;

  useEffect(() => {
    axios
      .get("https://photo-sharing-backend.onrender.com/posts")
      .then((res) => {
        setdata(res.data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [users]);

  const pageCount =
    users.length > 0 ? Math.ceil(users.length / postperpage) : 0;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <Header />
      {[...users]
        .reverse()
        .slice(postvisited, postvisited + postperpage)
        .map((user) => {
          return (
            <Postview
              key={user._id}
              name={user.author}
              location={user.location}
              image={`https://photo-sharing-backend.onrender.com/${user.imagename}`}
              date={user.Date}
              likes={user.likes}
              description={user.description}
            />
          );
        })}
      {!loading&&(<ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationbtns"}
        previousLinkClassName={"prevbtn"}
        nextLinkClassName={"nextbtn"}
        disabledClassName={"paginationdisabled"}
        activeClassName={"paginationactive"}
      />)}
      <div className="spinner">
        {loading && (
          <ReactBootstrap.Spinner
            className="spinner"
            animation="border"
            variant="primary"
          />
        )}
      </div>
    </>
  );
}
