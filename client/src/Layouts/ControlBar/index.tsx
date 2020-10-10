import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SearchPanel from './SearchPanel';
import { TabPanel } from './styled';

const ControlBar: React.FC = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	};

	return (
		<>
			<TabPanel>
				<Tabs value={value} indicatorColor='primary' textColor='primary' onChange={handleChange} aria-label='disabled tabs example'>
					<Tab label='FOR YOU' />
					<Tab label='Homes' disabled />
					<Tab label='EXPERIENCES' disabled />
					<Tab label='PLACES' disabled />
				</Tabs>
			</TabPanel>
			<SearchPanel />
		</>
	);
};

export default ControlBar;
