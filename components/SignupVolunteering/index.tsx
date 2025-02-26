import { FC } from 'react'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import Checkbox from '@/components/Form/Checkbox'
import CheckboxWithDescription from '@/components/SignupVolunteering/CheckboxWithDescription'
import Textarea from '@/components/Form/Textarea'
import { useVolunteeringForm } from '@/hooks/useData'

const SignupVolunteering: FC = () => {
  const { t } = useTranslation()
  const { data } = useVolunteeringForm()

  return (
    <div
      className={clsx(
        'container grid place-items-start gap-6',
        'bg-blue-50 rounded',
        'mx-auto px-8 py-7'
      )}
    >
      <h3 className="text-lg font-semibold">
        {t('signup.volunteering.header')}
      </h3>
      <div className="max-w-xs">
        <CheckboxWithDescription
          name="volunteering_resource"
          value="psychologist"
        >
          {t('signup.volunteering.psychologist')}
        </CheckboxWithDescription>
        <CheckboxWithDescription name="volunteering_resource" value="medic">
          {t('signup.volunteering.medic')}
        </CheckboxWithDescription>
        <CheckboxWithDescription name="volunteering_resource" value="nurse">
          {t('signup.volunteering.nurse')}
        </CheckboxWithDescription>
        <CheckboxWithDescription name="volunteering_resource" value="lawyer">
          {t('signup.volunteering.lawyer')}
        </CheckboxWithDescription>
        <CheckboxWithDescription name="volunteering_resource" value="cook">
          {t('signup.volunteering.cook')}
        </CheckboxWithDescription>
        <CheckboxWithDescription name="volunteering_resource" value="manager">
          {t('signup.volunteering.manager')}
        </CheckboxWithDescription>
        <CheckboxWithDescription
          name="volunteering_resource"
          value="translator"
        >
          {t('signup.volunteering.translator')}
        </CheckboxWithDescription>
        <Checkbox name="volunteering_resource" value="other">
          {t('signup.volunteering.other')}
        </Checkbox>
        <Textarea
          name="volunteering_resource_other_description"
          className="ml-5"
        />
      </div>
    </div>
  )
}

export default SignupVolunteering
