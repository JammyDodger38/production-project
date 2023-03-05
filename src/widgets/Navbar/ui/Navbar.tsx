import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useCallback, useState } from 'react'
import { Modal } from 'shared/ui/Modal/Modal'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, [])

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onToggleModal}>
        {t('Войти')}
      </Button>

      <Modal isOpen={isAuthModal} onClose={() => setIsAuthModal(false)}>
        {/* eslint-disable */}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident magnam alias a pariatur
        autem dolorum numquam optio, culpa officia distinctio, doloremque similique quod quasi enim
        tenetur at. Temporibus iste impedit perferendis esse eum voluptatum, accusantium est illo
        reprehenderit quis alias optio, corrupti id? Enim fuga adipisci nesciunt nam, dolorem sint.
      </Modal>
    </div>
  )
}
