import React, { useState } from "react";
// import ReactPaginate from "react-paginate";
import Pagination from "react-js-pagination";
import "../App.css";
import { getCategoryService, searchService } from "../services";
import { useEffect } from "react";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import { SubtitlesTwoTone } from "@material-ui/icons";
import { DebounceInput } from "react-debounce-input";
import { CircularProgress } from "@material-ui/core";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const Foodtable: React.FC = () => {
  //initial state:
  const [list, setList] = useState<any>([]);
  const [subList, setSubList] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [offSet, setOffSet] = useState(0);
  const [Data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [pageSize, setPageSize] = useState<Number>(10);
  const [loaderToggling, setLoaderToggling] = useState(true);

  //toggle state:
  const [toggle, setToggle] = useState(true);
  //funtion to handle api response:
  const handlinglist = () => {
    getCategoryService(pageCount).then((res) => {
      if (res) {
        console.log("####", res);
        setLoaderToggling(false);
        const data = res.data;
        const slice = data.slice(offSet, offSet + 10);
        // setPageCount(Math.ceil(data.length / 10));
        const postData = slice.map((element: any, i: any) => (
          <tr key={i}>
            <td>{element.fdcId}</td>
            <td>{element.description}</td>
            <td>{element.dataType}</td>
            <td>{element.publicationDate}</td>
            <td>{element.ndbNumber}</td>
            <td>
              <Button  variant="outlined" color="secondary"
              className='btn'
              onClick={() => handleToggling(element.foodNutrients)}>
                Show Nutrients
              </Button>
            </td>
          </tr>
        ));
        setData(postData);
      }
    });
  };
  //calling api:
  useEffect(() => {
    handlinglist();
  }, [pageCount]);
  //handling nutrient table toggling:
  const handleToggling = (num: any) => {
    setSubList(num);
    setToggle(!toggle);
  };
  //pagination function:
  const handlePageClick = (e: any) => {
    setPageCount(e);
  
  };
  //handling searching:
  const handleSearch = () => {
    searchService(search, pageCount).then((res) => {
      if (res) {
        console.log("res2", res);
        const data = res.data.foods;
        const count = res.data.totalHits;
        setPageSize(count);
        const slice = data.slice(offSet, offSet + 10);
        setPageCount(Math.ceil(data.length / 10));
        const postData = slice.map((element: any, i: any) => (
          <tr key={i}>
            <td>{element.fdcId}</td>
            <td>{element.description}</td>
            <td>{element.dataType}</td>
            <td>
              {element.publicationDate
                ? element.publicationDate
                : element.publishedDate}
            </td>
            <td>{element.ndbNumber}</td>
            <td>
              <Button  variant="outlined" color="secondary"
                onClick={() => handleToggling(element.foodNutrients)}
                  className='btn'
              >
                Show Nutrients
              </Button>
            </td>
          </tr>
        ));
        setData(postData);
      }
    });
  };
  useEffect(() => {
    handleSearch();
  }, [search]);
  //handling style for table :
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
  return (
    <div className="main_container">
      {loaderToggling === true ? (
        <>
          <CircularProgress />
          <h3>Data is Loading....</h3>
        </>
      ) : (
        <>
          {toggle === true ? (
            <div className="table_text">
              {/* <h6>Table</h6> */}
              <DebounceInput
                type="search"
                inLength={1}
                debounceTimeout={1000}
                placeholder="Search something here.."
                onChange={(e) => setSearch(e.target.value)}
                className="input_box"
              />
              {/* {console.log('&&&',search)} */}
              <TableContainer component={Paper}> 
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
          <TableRow>
          <StyledTableCell align="left" style={{ width: "16%" }}>FdcId</StyledTableCell>
            <StyledTableCell align="left" style={{ width: "16%" }}>Description</StyledTableCell>
            <StyledTableCell align="left" style={{ width: "16%" }}>DataType&nbsp;</StyledTableCell>
            <StyledTableCell align="left" style={{ width: "16%" }}>Publication Date&nbsp;</StyledTableCell>
            <StyledTableCell align="left" style={{ width: "16%" }}>Ndb Number&nbsp;</StyledTableCell>
            <StyledTableCell align="left" style={{ width: "16%" }}>Food Nutrients&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Data}
        </TableBody>
                </Table>
             </TableContainer>
              <div className="pagination">
                {pageSize >= 10 ? (
                  <Pagination
                    activePage={pageCount}
                    itemsCountPerPage={pageCount}
                    totalItemsCount={Infinity}
                    pageRangeDisplayed={3}
                    onChange={handlePageClick}
                  />
                ) : (
                  ""
                )}

              </div>
            </div>
          ) : (
            <div className="">
              <span onClick={handleToggling} className='close_span'>
                <CloseIcon className="close_icon" />
              </span>
              <TableContainer component={Paper}> 
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
          <TableRow>
          <TableCell align="left" className="
          table_media">Amount</TableCell>
          <TableCell align="left" >DerivationCode</TableCell>
          <TableCell align="left" >Derivation Description</TableCell>
          <TableCell align="left" >Name</TableCell>
          <TableCell align="left" >Number</TableCell>
          <TableCell align="left" >UnitName</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

                  {subList.map((el: any, index: any) => (
                    <tr key={index}>
                      <td>{el.amount ? el.amount : el.value}</td>
                      <td>{el.derivationCode}</td>
                      <td>
                        {el.derivationDescription
                          ? el.derivationDescription
                          : el.description}
                      </td>
                      <td>{el.name ? el.name : el.nutrientName}</td>
                      <td>{el.number ? el.number : el.nutrientNumber}</td>
                      <td>{el.unitName}</td>
                    </tr>
                  ))}
                    </TableBody>
                 </Table>
             </TableContainer>
              
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default Foodtable;
