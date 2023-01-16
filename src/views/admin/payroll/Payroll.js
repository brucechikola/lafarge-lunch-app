import React from 'react'
import Button from '../../../components/shared/Button'
import Container from '../../../components/shared/Container'
import PageControlsTab from '../../../components/shared/PageControlsTab'
import Title from '../../../components/shared/Title'
import CalendarWrapper from './components/Calendar'
import DeductionSummary from './components/DeductionSummary'
import OverallSummary from './components/OverallSummary'
import PayoutSummary from './components/PayoutSummary'
import PayrollSummaryList from './components/PayrollSummaryList'
import PayrollSummarySum from './components/PayrollSummarySum'

export default function Payroll() {
    return (
        <Container>
            <PageControlsTab className="mt-5">
                <Title
                    title="Payroll"
                    subTitle="Manage your pyroll"
                />
                <div className='flex items-center justify-center'>
                    <Button onClick={() => alert()} className="mr-3 transition ease-in-out text-gray-500 hover:bg-gray-100 text-sm hover:shadow-md ">
                        View Payroll
                    </Button>
                    <Button onClick={() => alert()} className="bg-indigo-800 transition ease-in-out text-white hover:bg-indigo-700 text-sm hover:shadow-md ">
                        Initialize Payroll
                    </Button>
                </div>
            </PageControlsTab>
            <div className='w-full grid grid-cols-3 gap-4'>
                <OverallSummary />
                <CalendarWrapper />
            </div>
            <div className='w-full grid grid-cols-2 gap-4 mt-3'>
                <PayoutSummary />
                <DeductionSummary />
            </div>
            <div className='w-full grid grid-cols-3 gap-4 mt-3'>
                <PayrollSummaryList />
                <PayrollSummarySum />
            </div>
        </Container>
    )
}
