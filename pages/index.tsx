import React, { useEffect, useState } from 'react'
import Layout from 'components/Layout'
import Meta from 'components/Meta';
import Beer from 'components/Home';
import axios from 'axios'

const Index = () => {
    return (<Layout>
        <Meta pageTitle="Consumer App" />
            <Beer />
    </Layout>)
}
    ;

export default Index;