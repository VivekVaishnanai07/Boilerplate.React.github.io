import { alpha, Avatar, Checkbox, IconButton, TablePagination, Toolbar, Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { CustomerDetail, customersDetails } from './types';

export default function CustomerTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selected, setSelected] = useState([]);
  const [customerList, setCustomerList] = useState(customersDetails);

  const EnhancedTableToolbar = (props: any, index: number) => {
    const { numSelected } = props;

    const handleDelete = () => {
      let newList = customerList.filter((element) => element.selected !== true)
      setCustomerList(newList)
      setSelected([])
    }

    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected.length > 0 && {
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
          }),
        }}
      >
        {numSelected.length > 0 && (
          <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected.length} selected
          </Typography>
        )}
        {numSelected.length > 0 && (
          <Tooltip title="Delete">
            <IconButton onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    );
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleOnChange = (e: any, items: CustomerDetail) => {
    const { name, checked } = e.target;
    const newList = [...customerList];
    const index = newList.findIndex((h) => h.name === name);
    if (index > -1) {
      newList[index] = {
        name,
        selected: checked,
        address: items.address,
        avatarUrl: items.avatarUrl,
        createdAt: items.createdAt,
        email: items.email,
        phone: items.phone,
        id: items.id
      };
    }
    let selectedData = newList.map((item: any) => item.selected)
    let newData: any = selectedData.filter((element: any) => element === true)
    setSelected(newData)
    setCustomerList(newList);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected} />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <TableHead style={{ background: 'rgb(243 244 246)' }}>
              <TableRow>
                <TableCell padding="checkbox">
                  <label>
                    <Checkbox
                      checked={false}
                      // onChange={handleOnChange}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                  </label>
                </TableCell>
                <TableCell>NAME</TableCell>
                <TableCell>EMAIL</TableCell>
                <TableCell>LOCATION</TableCell>
                <TableCell>PHONE</TableCell>
                <TableCell>REGISTRATION DATE</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customerList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: any) => {
                  return (
                    <TableRow key={row.id}>
                      <TableCell padding="checkbox">
                        <label>
                          <Checkbox
                            name={row.name}
                            checked={row.selected}
                            onChange={(e) => handleOnChange(e, row)}
                            inputProps={{ 'aria-label': 'controlled' }}
                          />
                        </label>
                      </TableCell>
                      <TableCell>
                        <Box sx={{ alignItems: 'center', display: 'flex' }}>
                          <Avatar src={row.avatarUrl} sx={{ mr: 2 }}>
                          </Avatar>
                          <Typography color="textPrimary" variant="body1">{row.name}</Typography>
                        </Box>
                      </TableCell>
                      <TableCell >{row.email}</TableCell>
                      <TableCell >{`${row.address.city}, ${row.address.state}, ${row.address.country}`}</TableCell>
                      <TableCell >{row.phone}</TableCell>
                      <TableCell >{format(new Date(), 'dd/MM/yyyy')}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={customersDetails.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}