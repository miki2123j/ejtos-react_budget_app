import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses, Location } = useContext(AppContext);
    const totalBudget = expenses.budget

    return (
        <div className='alert alert-primary'>
            <span>Budget: {Location}{totalBudget}</span>
        </div>
    );
};

export default Budget;

