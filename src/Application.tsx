import * as React from 'react';
import { Table, TableBody, TableRow, TableCellProps, styled } from '@mui/material';
import { TableCell, tableCellClasses } from './ui';

const TinyTableCell = styled((props: TableCellProps) => <TableCell {...props} size='small' />)(({ theme }) => ({
	[`&.${tableCellClasses.sizeSmall}`]: {
		lineHeight: 1.2,
		padding: theme.spacing(0.5, 1),

		[theme.breakpoints.up('md')]: {
			lineHeight: 1.375,
			padding: theme.spacing(1, 2),
		},
	},
}));

export const Application: React.FunctionComponent = () => {
	return (
		<div>
			<Table>
				<TableBody>
					<TableRow>
						<TinyTableCell size='small'>Cell 1</TinyTableCell>
						<TinyTableCell size='small'>Cell 2</TinyTableCell>
						<TinyTableCell size='small'>Cell 3</TinyTableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	);
};
