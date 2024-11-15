import { browser } from '@wdio/globals'
import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(SecurePage.productPage).toBeExisting()
        await expect(SecurePage.productPage).toHaveText(
            expect.stringContaining('Swag Labs'))

        await LoginPage.open()

        await LoginPage.login('problem_user', 'secret_sauce')
        await expect(SecurePage.productPage).toBeExisting()
        await expect(SecurePage.productPage).toHaveText(
            expect.stringContaining('Swag Labs'))

        await LoginPage.open()

        await LoginPage.login('performance_glitch_user', 'secret_sauce')
        await expect(SecurePage.productPage).toBeExisting()
        await expect(SecurePage.productPage).toHaveText(
            expect.stringContaining('Swag Labs'))

        await LoginPage.open()

        await LoginPage.login('error_user', 'secret_sauce')
        await expect(SecurePage.productPage).toBeExisting()
        await expect(SecurePage.productPage).toHaveText(
            expect.stringContaining('Swag Labs'))

        await LoginPage.open()

        await LoginPage.login('visual_user', 'secret_sauce')
        await expect(SecurePage.productPage).toBeExisting()
        await expect(SecurePage.productPage).toHaveText(
            expect.stringContaining('Swag Labs'))
        
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce_')
        await expect(SecurePage.errorpupup).toBeExisting()
        await expect(SecurePage.errorpupup).toHaveText(
            expect.stringContaining('')) 
     
        await LoginPage.open()

        await LoginPage.login('problem_user', 'secret_sauce_')
        await expect(SecurePage.errorpupup).toBeExisting()
        await expect(SecurePage.errorpupup).toHaveText(
            expect.stringContaining(''))
     
        await LoginPage.open()

        await LoginPage.login('performance_glitch_user', 'secret_sauce_')
        await expect(SecurePage.errorpupup).toBeExisting()
        await expect(SecurePage.errorpupup).toHaveText(
            expect.stringContaining(''))
     
        await LoginPage.open()

        await LoginPage.login('error_user', 'secret_sauce_')
        await expect(SecurePage.errorpupup).toBeExisting()
        await expect(SecurePage.errorpupup).toHaveText(
            expect.stringContaining(''))
     
        await LoginPage.open()

        await LoginPage.login('visual_user', 'secret_sauce_')
        await expect(SecurePage.errorpupup).toBeExisting()
        await expect(SecurePage.errorpupup).toHaveText(
            expect.stringContaining(''))

        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(SecurePage.productPage).toBeExisting()
        await expect(SecurePage.productPage).toHaveText(
                expect.stringContaining('Swag Labs'))
        
    })
})

