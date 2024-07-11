import React from 'react'
import { LayoutHeader, LayoutFooter } from '../Components/Layout';

export function ErrorPage() {
    return <div>
        <LayoutHeader />
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <LayoutFooter />
    </div>
}